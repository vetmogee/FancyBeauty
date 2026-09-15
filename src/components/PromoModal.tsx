import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isPromoActive } from '@/lib/promo';

// Natural size of /promo.png — the modal keeps this exact aspect ratio and does
// not reflow, so the image always fills it edge to edge.
const IMG_W = 1152;
const IMG_H = 2048;

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

// The promo popup only runs on the main studio pages.
const PROMO_PAGES = ['/home', '/obeauty', '/fancy'];

// Promo popup shown on every fresh page load / refresh while the promo is live.
const PromoModal = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ startX: 0, startY: 0, ox: 0, oy: 0, active: false });

  // Only run the popup once the user is on /home, /obeauty, or /fancy.
  const visible = open && isPromoActive() && PROMO_PAGES.includes(pathname);

  // Keep the image covering the modal: clamp panning so no empty space can show.
  const clamp = useCallback((x: number, y: number, s: number) => {
    const box = boxRef.current;
    if (!box) return { x: 0, y: 0 };
    const maxX = (box.clientWidth * (s - 1)) / 2;
    const maxY = (box.clientHeight * (s - 1)) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, x)),
      y: Math.max(-maxY, Math.min(maxY, y)),
    };
  }, []);

  const zoom = (delta: number) => {
    setScale((prev) => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, +(prev + delta).toFixed(2)));
      setOffset((o) => clamp(o.x, o.y, next));
      return next;
    });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return; // nothing to pan when not zoomed in
    drag.current = { startX: e.clientX, startY: e.clientY, ox: offset.x, oy: offset.y, active: true };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const nx = drag.current.ox + (e.clientX - drag.current.startX);
    const ny = drag.current.oy + (e.clientY - drag.current.startY);
    setOffset(clamp(nx, ny, scale));
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  // Lock background scroll while the modal is up.
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

  if (!visible) return null;

  const canPan = scale > 1;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      {/* Modal — fixed to the image aspect ratio, sized to fit the viewport, never reflows */}
      <div
        ref={boxRef}
        className="relative max-h-[90vh] max-w-[95vw] overflow-hidden bg-black shadow-2xl"
        style={{ aspectRatio: `${IMG_W} / ${IMG_H}`, height: '90vh' }}
      >
        <img
          src="/promo.png"
          alt={t('promo_zoomin_alt', { percent: 15 })}
          draggable={false}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="absolute inset-0 z-0 h-full w-full select-none object-cover"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: dragging ? 'none' : 'transform 150ms ease-out',
            cursor: canPan ? (dragging ? 'grabbing' : 'grab') : 'default',
            touchAction: 'none',
          }}
        />

        {/* Close — top right, above the image */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-xl leading-none text-white transition-colors hover:bg-black/70"
        >
          ✕
        </button>

        {/* Zoom controls — bottom left, desktop only, above the image */}
        <div className="absolute bottom-4 left-4 z-20 hidden flex-col gap-2 md:flex">
          <button
            type="button"
            onClick={() => zoom(ZOOM_STEP)}
            aria-label="Zoom in"
            disabled={scale >= MAX_SCALE}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl leading-none text-white transition-colors hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => zoom(-ZOOM_STEP)}
            aria-label="Zoom out"
            disabled={scale <= MIN_SCALE}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl leading-none text-white transition-colors hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;

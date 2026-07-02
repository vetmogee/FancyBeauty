const AGB_RETURN_PATHS = ['/home', '/obeauty', '/fancy'] as const;

export type AgbReturnPath = (typeof AGB_RETURN_PATHS)[number];

export function getAgbReturnPath(from: unknown): AgbReturnPath {
  return AGB_RETURN_PATHS.includes(from as AgbReturnPath) ? (from as AgbReturnPath) : '/home';
}

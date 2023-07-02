const mapping: Record<string, string> = {
  empresas: 'empresa',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

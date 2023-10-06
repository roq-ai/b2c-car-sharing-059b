import queryString from 'query-string';
import { OperationsDashboardInterface, OperationsDashboardGetQueryInterface } from 'interfaces/operations-dashboard';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperationsDashboards = async (
  query?: OperationsDashboardGetQueryInterface,
): Promise<PaginatedInterface<OperationsDashboardInterface>> => {
  return fetcher('/api/operations-dashboards', {}, query);
};

export const createOperationsDashboard = async (operationsDashboard: OperationsDashboardInterface) => {
  return fetcher('/api/operations-dashboards', { method: 'POST', body: JSON.stringify(operationsDashboard) });
};

export const updateOperationsDashboardById = async (id: string, operationsDashboard: OperationsDashboardInterface) => {
  return fetcher(`/api/operations-dashboards/${id}`, { method: 'PUT', body: JSON.stringify(operationsDashboard) });
};

export const getOperationsDashboardById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/operations-dashboards/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOperationsDashboardById = async (id: string) => {
  return fetcher(`/api/operations-dashboards/${id}`, { method: 'DELETE' });
};

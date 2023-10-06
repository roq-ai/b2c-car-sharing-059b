import queryString from 'query-string';
import { OperationsStaffInterface, OperationsStaffGetQueryInterface } from 'interfaces/operations-staff';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getOperationsStaffs = async (
  query?: OperationsStaffGetQueryInterface,
): Promise<PaginatedInterface<OperationsStaffInterface>> => {
  return fetcher('/api/operations-staffs', {}, query);
};

export const createOperationsStaff = async (operationsStaff: OperationsStaffInterface) => {
  return fetcher('/api/operations-staffs', { method: 'POST', body: JSON.stringify(operationsStaff) });
};

export const updateOperationsStaffById = async (id: string, operationsStaff: OperationsStaffInterface) => {
  return fetcher(`/api/operations-staffs/${id}`, { method: 'PUT', body: JSON.stringify(operationsStaff) });
};

export const getOperationsStaffById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/operations-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteOperationsStaffById = async (id: string) => {
  return fetcher(`/api/operations-staffs/${id}`, { method: 'DELETE' });
};

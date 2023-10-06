import { OperationsDashboardInterface } from 'interfaces/operations-dashboard';
import { GetQueryInterface } from 'interfaces';

export interface OperationsStaffInterface {
  id?: string;
  staff_name: string;
  staff_role: string;
  dashboard_id: string;
  created_at?: any;
  updated_at?: any;

  operations_dashboard?: OperationsDashboardInterface;
  _count?: {};
}

export interface OperationsStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  staff_name?: string;
  staff_role?: string;
  dashboard_id?: string;
}

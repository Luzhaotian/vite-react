import { Table } from 'antd';
import type { TableProps } from 'antd/es/table';

type CustomTableProps<T> = TableProps<T>;

const CustomTable = <T extends object = Record<string, unknown>>({
  ...restProps
}: CustomTableProps<T>) => <Table<T> {...restProps} />;

export default CustomTable;

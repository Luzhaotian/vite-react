// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconComponentProps } from '@ant-design/icons/lib/components/Icon';

declare module '@ant-design/icons/lib/components/AntdIcon' {
  interface AntdIconProps {
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }
}

declare module '@ant-design/icons/lib/components/Icon' {
  interface IconComponentProps {
    onPointerEnterCapture?: React.PointerEventHandler<HTMLElement>;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLElement>;
  }
}

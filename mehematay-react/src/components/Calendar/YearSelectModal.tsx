import {DialogTitle, Dialog} from '@mui/material';
import CustomVirtualizedList from './CustomVirtualizedList';

export interface SimpleDialogProps {
  open: boolean;
  selectedYear: string;
  onClose: (value: string) => void;
}

export default function YearSelectModal(props: SimpleDialogProps): JSX.Element {
  const { onClose, open, selectedYear } = props;
  const nowYear = Number(new Date().getFullYear());
  const years: Array<string> = [];
  for (let i = 0; i < 200; i++) {
    years.push(`${nowYear - 100 + i}`);
  }
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Select Year</DialogTitle>
      <CustomVirtualizedList
        items={years}
        selectedValue={selectedYear}
        onSelect={onClose}
      />
    </Dialog>
  );
}

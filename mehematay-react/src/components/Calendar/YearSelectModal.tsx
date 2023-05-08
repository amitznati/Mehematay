import {Dialog, DialogContent} from '@mui/material';
import { heIL } from '@mui/x-date-pickers/locales';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/he';
import defaultDayjs from "dayjs";

export interface SimpleDialogProps {
  open: boolean;
  selectedDate: Date;
  onClose: (value: defaultDayjs.Dayjs | null) => void;
}

export default function YearSelectModal(props: SimpleDialogProps): JSX.Element {
  const { onClose, open, selectedDate } = props;
  return (
    <Dialog onClose={() => onClose(null)} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="he"
            localeText={heIL.components.MuiLocalizationProvider.defaultProps.localeText}
          >
            <div dir="rtl">
              <StaticDatePicker
                defaultValue={defaultDayjs(selectedDate)}
                onAccept={(v: defaultDayjs.Dayjs | null) => onClose(v)}
              />
            </div>

          </LocalizationProvider>
      </DialogContent>
    </Dialog>
  );
}

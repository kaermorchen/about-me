import { helper } from '@ember/component/helper';
import format from 'date-fns/format';

export function formatDate([date, dateFormat]) {
  if (!dateFormat) {
    dateFormat = 'dd.MM.YYYY';
  }

  return format(date, dateFormat);
}

export default helper(formatDate);

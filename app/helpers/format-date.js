import { helper } from '@ember/component/helper';
import format from 'npm:date-fns/format';

export function formatDate([date, dateFormat]) {
  if (!dateFormat) {
    dateFormat = 'DD.MM.YYYY';
  }

  return format(date, dateFormat);
}

export default helper(formatDate);

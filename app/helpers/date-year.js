import { helper } from '@ember/component/helper';

export function dateYear([date]) {
  return new Date(date).getFullYear();
}

export default helper(dateYear);

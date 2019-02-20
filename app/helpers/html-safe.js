import { helper } from '@ember/component/helper';
import { htmlSafe as f } from '@ember/string';

export function htmlSafe([str]) {
  return f(str);
}

export default helper(htmlSafe);

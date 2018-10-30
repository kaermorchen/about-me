import Route from '@ember/routing/route';
import { readOnly } from '@ember/object/computed';

export default Route.extend({
  breadcrumbTitle: readOnly('controller.model.name'),
});

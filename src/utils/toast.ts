import { upperFirst } from 'lodash';

import { customToast } from 'components/toast/Toast'

export const showCustomToast = (message: string) => customToast(upperFirst(message))

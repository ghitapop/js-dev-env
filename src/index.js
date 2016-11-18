/**
 * Created by Ghita Pop on 11/18/2016.
 */

'use strict';

import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);


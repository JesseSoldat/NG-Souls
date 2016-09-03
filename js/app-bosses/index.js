import angular from 'angular';

import BossesCtrl from './ctrl/bosses.ctrl';
import BossCtrl from './ctrl/boss.ctrl';
import AddBossCtrl from './ctrl/add-boss.ctrl';


import BossesService from './services/bosses.service';

angular 
	.module('app.bosses', [])

	.controller('BossesCtrl', BossesCtrl)
	.controller('BossCtrl', BossCtrl)
	.controller('AddBossCtrl', AddBossCtrl)

	.service('BossesService', BossesService)

;
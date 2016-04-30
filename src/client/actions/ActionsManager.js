'use strict';

const requireAction = name => require(`./${name}`);

class ActionsManager {
	constructor(client) {
		this.client = client;

		this.register('MessageCreate');
		this.register('MessageDelete');
		this.register('MessageUpdate');
		this.register('ChannelCreate');
		this.register('ChannelDelete');
		this.register('ChannelUpdate');
	}

	register(name) {
		let Action = requireAction(name);
		this[name] = new Action(this.client);
	}
}

module.exports = ActionsManager;

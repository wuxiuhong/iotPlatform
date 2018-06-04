// import store from '../store/index'
import eventCenter from '../core/event';
import { getFormItemParams, refs } from '../core/soul_helper';

export default {
    name: 'Render',
    props: {
        soul: [Object]
    },
    render(h) {
        if (!this.soul) return;
        h.$util = {getFormItemParams, refs};
        h.vm = this;
        // h.store = store
        h.eventCenter = eventCenter;
        eventCenter.createElement = h;
        return this.soul.render(h);
    }
}

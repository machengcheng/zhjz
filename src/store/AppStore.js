import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as actions from './actions';
import * as getters from './getters';

const state = {
    show: 'mcc马成成',
    fixedTabs: [
        {
            label: '系统简介',
            name: '/home/pageHomeDefault/systemProfile',
            content: '系统简介内容',
            closable: false
        },
        {
            label: '扶贫云',
            name: '/home/pageHomeDefault/fuPinCloud',
            content: '扶贫云内容',
            closable: false
        },
        {
            label: '生态云',
            name: '/home/pageHomeDefault/shengTaiCloud',
            content: '生态云内容',
            closable: false
        },
        {
            label: '环保云',
            name: '/home/pageHomeDefault/huanBaoCloud',
            content: '环保云内容',
            closable: false
        },
        {
            label: '安全云',
            name: '/home/pageHomeDefault/anQuanCloud',
            content: '安全云内容',
            closable: false
        },
        {
            label: '水务云',
            name: '/home/pageHomeDefault/shuiWuCloud',
            content: '水务云内容',
            closable: false
        },
        {
            label: '二维码',
            name: '/home/pageHomeDefault/erWeiMa',
            content: '二维码',
            closable: false
        }
    ],
    myCenterCurrentTab: '/home/pageHomeDefault/systemProfile',
    illegalDataConditions: {
	    detectTime: '',
	    plateNumber: ''
    }
};

const mutations = {
    ADD_TAB(state, tab) {
        state.fixedTabs.push(tab);
    },
    DEL_TAB(state, tabName) {
        state.fixedTabs.forEach((tab, index) => {
            if (tab.name === tabName) {
                state.fixedTabs.splice(index, 1);
            }
        });
    },
    SET_MY_CENTER_TAB(state, tabName) {
        state.myCenterCurrentTab = tabName;
    },
	ILLEGAL_DATA_SEARCH(state, data) {
    	state.illegalDataConditions.detectTime = data.detectTime ? data.detectTime : '';
    	state.illegalDataConditions.plateNumber = data.plateNumber ? data.plateNumber : '';
	}
};

export default new Vuex.Store({
    state: state,
    actions: actions,
    getters: getters,
    mutations: mutations
});

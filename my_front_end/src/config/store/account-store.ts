import { Module } from 'vuex';

export interface AccountStateStorable {
  logon: boolean;
  userIdentity: null | any;
  authenticated: boolean;
  ribbonOnProfiles: string;
  activeProfiles: string;
  ticketValidated: boolean;
  ssoChecked: boolean;
  currentFunctionId: string;
  buildTime: string;
}

export const defaultAccountState: AccountStateStorable = {
  logon: false,
  userIdentity: null,
  authenticated: false,
  ribbonOnProfiles: '',
  activeProfiles: '',
  ticketValidated: false,
  ssoChecked: false,
  currentFunctionId: '',
  buildTime: '',
};

export const accountStore: Module<AccountStateStorable, any> = {
  state: { ...defaultAccountState },
  getters: {
    logon: state => state.logon,
    account: state => state.userIdentity,
    authenticated: state => state.authenticated,
    activeProfiles: state => state.activeProfiles,
    ribbonOnProfiles: state => state.ribbonOnProfiles,
    ticketValidated: state => state.ticketValidated,
    ssoChecked: state => state.ssoChecked,
    currentFunctionId: state => state.currentFunctionId,
    buildTime: state => state.buildTime,
  },
  mutations: {
    authenticate(state) {
      state.logon = true;
    },
    authenticated(state, identity) {
      state.userIdentity = identity;
      state.authenticated = true;
      state.logon = false;
    },
    logout(state) {
      state.userIdentity = null;
      state.authenticated = false;
      state.logon = false;
    },
    setActiveProfiles(state, profile) {
      state.activeProfiles = profile;
    },
    setRibbonOnProfiles(state, ribbon) {
      state.ribbonOnProfiles = ribbon;
    },
    ticketValidated(state) {
      state.ticketValidated = true;
    },
    ssoChecked(state) {
      state.ssoChecked = true;
    },
    setCurrentFunctionId(state, functionId) {
      state.currentFunctionId = functionId;
    },
    setBuildTime(state, buildTime) {
      state.buildTime = buildTime;
    },
  },
};

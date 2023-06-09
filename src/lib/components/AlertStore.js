import { writable } from "svelte/store";

export const ALERT_TYPE = {
  DANGER: 'DANGER',
  SUCCESS: 'SUCCESS'
};

Object.freeze();

export const alertMessage = writable('');
export const alertType = writable('');

export const displayAlert = (message, resetTime, type=ALERT_TYPE.SUCCESS) => {
  alertMessage.set(message);
  alertType.set(type);

  if(resetTime){
    setTimeout(() => {
      alertMessage.set();
    }, resetTime)
  }
};
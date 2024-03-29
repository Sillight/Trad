import { defineStore } from 'pinia';

export interface IPullNumber {
    PullNumber: number;
    ArcanistName: string;
    Rarity: number;
    BannerType: string;
    Timestamp: number;
}

export interface IPull {
    ArcanistName: string,
    Rarity: number,
    BannerType: string,
    Timestamp: number
}

interface IPullsRecord extends Array<IPull>{}

interface IPullsRecordStore {
    data: IPullsRecord,
}

export const usePullsRecordStore = defineStore('pulls', {
    state: (): IPullsRecordStore => ({
        data: []
    }),
    actions: {
        updatePullsRecord (newData) {
            this.data = [
                ...newData
            ]
        },
        reset () {
            this.data = []
        }
    },
    persist: true
});

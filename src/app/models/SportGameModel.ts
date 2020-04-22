export class SportGameModel {
	createTimeStamp: Date;
	updateTimeStamp: Date;
	guid: string;
	gid: string;
	groupName: string;
	groupDesc: string;
	location: string;
	startDateTime: Date;
	endDateTime: Date;
	groupType: string;
	groupJoinType: string;
	sportType: string;

	constructor(obj: any = null) {
		if (obj != null) {
			Object.assign(this, obj);
		}
	}
}

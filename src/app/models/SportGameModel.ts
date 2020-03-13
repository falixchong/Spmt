export class SportGameModel{
    guid: string;
    gid: string;
    groupName: string;
    groupDesc: string;
    location: string;
    groupType: string;
    groupJoinType: string;
    sportType: string;

    constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
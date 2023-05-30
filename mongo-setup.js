const config = {
	_id: "dbRepl",
	members: [
		{
			_id: 0,
			host: "dbmongoPrimary:27017",
			priority: 5,
		},
		{
			_id: 1,
			host: "dbmongo2:27017",
			priority: 0,
		},
		{
			_id: 2,
			host: "dbmongo3:27017",
			priority: 0,
		},
	],
};

if (db.hello().secondary || db.hello().isWritablePrimary) {
	rs.reconfig(config);
} else {
	rs.initiate(config);
}

print(rs.conf());

print(rs.status());

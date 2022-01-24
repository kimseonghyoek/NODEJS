function findAndSaveUsers(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if(err) {
            return console.log(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 출력
            if(err) {
                return console.error(err);
            }
            Users.findOne({ gender: 'm'}, (err, user) => { // 세 번째 출력
                // 생략
            })
        })
    })
}
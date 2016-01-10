/**
 * 数据库结构定义
 * ----这个文件不会被引用，但是在数据的流通中会根据结构传输数据
 * 多行注释的为数据库的表结构，传输object到DAO层执行操作
 */

//t_admin
exports.User = {
    id: 0,
    username: "",
    password: ""
    /**
     * Admin_id         int(11)
     * Admin_name       varchar(10)
     * Admin_password   varchar(32)
     */
};

//t_type
exports.bookType = {
    id: 0,
    typeName: ''
    /**
     * Sort_id      int(11)
     * Sort_name    varcahr(20)
     */
};

exports.book = {
    id: 0,
    bookName:'',
    writer:'',
    typeId: 0, //外键
    price: 0, //有小数
    pubCompany: '',
    pubDate: Date,
    sum: 0,
    currentNum: 0, //现有数量
    buyDate: Date,
    brief: '',
    imageName: ''//图片文件的名称
    /**
     * Book_nun     int(11)
     * Book_name    varchar(20)
     * Writer       varchar(10)
     * Sort_id      int(11)
     * Price        decimal(5)
     * Pub_company  varchar(20)
     * Pub_date     date
     * Total_num    int
     * Current_num  int
     * Buy_date     date
     * Brief        varchar(100)
     */
};
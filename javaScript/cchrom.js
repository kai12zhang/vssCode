var request = window.indexedDB.open('db',1);
var db;
request.onsuccess = function(event){
    db = request.result;
    console.log('数据库打开成功');

}

request.onupgradeneeded = function(event){
    db = event.target.result;
    var objectStore;
    if(!db.objectStoreNames.contains('person')){
        db.createObjectStore
        objectStore = db.createObjectStore('person',{KeyPath:'id'});
    }
    console.log('person 创建完成')
}
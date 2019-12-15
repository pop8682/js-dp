// 1. 만들기 쉬운 Entity 먼저 생성
const Task = class {
    constructor(title){
        // 은닉
        if(!title) throw "invalid title";
        this._title = title;
        this._date = new Date();
        this._isComplete = false;
    }

    // 정렬기준은 Task가 가지고 있으므로 Task에 책임이 있다 
    // 현재의 Task과 다른 Task를 비교
    // 얘는 어쨌든 정렬했으니까 책임을 다했다.
    sortTitle(task) {
        return (this._title > task._title) ? 1 : -1;
    }

    sortDate(task) {
        return (this._title > task._title) ? 1 : -1;
    }
}

const TaskList = class {
    constructor(title) {
        if(!title) throw "invalid title"
        this._title = title;
        this._list = [];
    }

    add(title) {
        this._list.push(new Task(title));
    }

    // array 함수를 사용하는 순간 내용물은 Task가 된다.
    // Task를 구하게 되면 나머지는 Task의 책임이 된다.
    // 
    byDate(){
        this._getSort("date")
    }

    byTitle() {
        this._getSort("title")
    }

    _getSort(criteria){
        const list = this._list;
        const s = taskSort[criteria]
        list.sort(s);
    }
}

const taskSort = {
    "title" : (a,b)=> a.sortTitle(b),
    "date" : (a,b)=> a.sortDate(b),
}

const list1 = new TaskList("코드스피츠 80");
list1.add("템플릿 패턴");
list1.add("컴포지트 패턴")
list1.add("빌드 패턴")
list1.byDate();
const list2 = new TaskList("코드스피츠 85");
list2.add("지라 설치");
list2.add("지라 클라우드 접속")
list2.add("지라 종료")
list2.byTitle();
console.log(list1)
console.log(list2)
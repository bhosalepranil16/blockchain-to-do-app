pragma solidity >=0.4.22 <0.8.0;

contract TodoList {
    uint public taskCount;
    
    struct Task {
        uint id;
        string content;
        bool status;
    }
    
    mapping(uint => Task) public taskList;
    event taskCreated(uint id, string content, bool status);
    event taskCompleted(uint id, bool status);
    
    constructor() public {
        addTask("Welcome...");
    }
    
    function addTask(string memory _content) public {
        taskList[taskCount] = Task(taskCount, _content, false);
        emit taskCreated(taskCount,_content,false);
        taskCount++;
    }
    
    function completeStatus(uint id) public {
        require(id >= 0 && id < taskCount);
        taskList[id].status = true;
        emit taskCompleted(id, true);
    }
}
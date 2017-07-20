

export default class Task {
  constructor(item){
    this.key = item.key
    this.title = item.title
    this.priority = item.priority
  }

  get priorityText(){
    switch (this.priority) {
      case 1:
        return 'Low'
        break
      case 2:
        return 'Medium'
        break
      case 3:
        return 'High'
        break
    }
  }
}

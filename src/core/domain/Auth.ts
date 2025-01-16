export class Auth {
  name: string
  email: string
  photo?: string
  password: string
  isActive: boolean

  constructor() {
    this.name = ''
    this.email = ''
    this.password = ''
    this.isActive = true
  }
}

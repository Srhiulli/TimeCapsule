import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    payload: { id: number } // payload type is used for signing and verifying
    user: {
      sub: string
      name: string
      avatarUrll: string
    } // user type is return type of `request.user` object
  }
}

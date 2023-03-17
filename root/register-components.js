import { register } from 'riot'
const basename = ( path, extension = '' ) => path.split( '/' ).pop().replace( extension, '' )

export default () => {

  const reg = ( context ) => {
    context.keys().map( path => {
      const name = basename( path, '.riot' )
      const component = context( path )

      register( name, component.default )
    } )
  }

  reg( require.context( './components/global/', true, /[a-zA-Z0-9-]+\.riot/ ) )
  reg( require.context( './components/local/', true, /[a-zA-Z0-9-]+\.riot/ ) )
}

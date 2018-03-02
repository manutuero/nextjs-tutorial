import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>{/* De donde sale props.show.image.summary ? el replace estoy casi seguro que es nativo de js, y que usa regex*/}
        <img src={props.show.image.medium}/>
    </Layout>
)

// De donde sale el objeto contexto ?
Post.getInitialProps = async function(context) {
    const {id} = context.query // destructuracion :p
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

export default Post
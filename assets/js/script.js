const video = (() => {
    const element = ({ id, url }) => document.getElementById(`${id}`).setAttribute('src', `${url}`)
    return { insert: ({ url, id }) => element({ url, id }) }
})()

class Multimedia {
    constructor({ url }) {
        const _url = url
        this._getUrlMultimedia = () => _url
    }
    get url() { return this._getUrlMultimedia() }
    setInicio() { return 'Este método es para realizar un cambio en la URL del video' }
}

class Reproductor extends Multimedia {
    constructor({ url, id }) {
        super({ url })
        const _id = id
        this._getIdReproductor = () => _id
    }
    playMultimedia() { video.insert({ id: this._getIdReproductor(), url: this.url }) }
    setInicio(tiempo) { video.insert({ id: this._getIdReproductor(), url: `${this.url}?start=${tiempo}` }) }
}

const musica = new Reproductor({ url: 'https://www.youtube.com/embed/F8x_GL6Ic-c', id: 'musica' })
musica.playMultimedia()
musica.setInicio(303)

const pelicula = new Reproductor({ url: 'https://player.vimeo.com/video/338753098?h=81346e6dca', id: 'peliculas' })
pelicula.playMultimedia()

const serie = new Reproductor({ url: 'https://www.youtube.com/embed/m7ccdln9MOI', id: 'series' })
serie.playMultimedia()
serie.setInicio(23)

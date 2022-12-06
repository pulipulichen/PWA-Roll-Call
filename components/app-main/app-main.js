let app = {
  props: ['db'],
  components: {
  },
  data () {
    return {
      example: ``,
      examples: [
        { key: 'shh', value: `assets/shh-operation.png`}
      ]
    }
  },
  mounted () {
    if (this.db.localConfig.cover === '') {
      this.db.localConfig.cover = this.examples[0].value
    }
  },
  computed: {
  },
  watch: {
    example: function (example) {
      if (example === '') {
        return false
      }

      setTimeout(() => {
        this.db.localConfig.cover = this.example
        this.example = ''
      }, 500)
    }
  },
  methods: {
    resizeWindow () {
      window.resizeTo(100, 150);
    }
  }
}

module.exports = app
<template>
  <div>
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import axios from '@/js/axios.js';
export default {
  name: 'HelloWorld',
  methods: {
    afterRead(files){
      console.log(files);
      let a = {
        headers: {
          'Content-Type': 'multipart/form-data'
        } 
      };
      let formData = new FormData()
      formData.append('name', files.file.name)
      formData.append('size', files.file.size)
      formData.append('file', files.file)
      formData.append('chunk', '0')
      axios.post('/img', formData, a).then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>

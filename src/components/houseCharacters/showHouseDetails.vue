<template>
  <div>
      <div> Founder: {{ houseDetail.founder }} </div>
      <div> Head of House: {{ houseDetail.headOfHouse }} </div>
      <div> House Ghost: {{ houseDetail.houseGhost }} </div>
      <div> Mascot: {{ houseDetail.mascot }} </div>
      <div> Founder: {{ houseDetail.founder }} </div>
      <div> School: {{ houseDetail.school || 'NA' }} </div>

  </div>
</template>

<script>
export default {
    props: {
        houseDetail: {
            type: Object,
            default: () => {},
        }
    }
}
</script>

<style>

</style>
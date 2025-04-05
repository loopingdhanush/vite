<script setup>
import hero from '@/components/hero.vue'
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <hero title="Become a Dev"/>
  <HomeCards/>
  <JobListings limit="3" :showbutton="true" />
</template>

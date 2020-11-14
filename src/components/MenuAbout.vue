<template>
  <div class="modal fade" id="createPostModal" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header no-border-header text-center">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 class="modal-title text-center">Create post...</h3>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="createPost()">
            <div class="form-group">
              <textarea class="form-control" v-model="newPost" placeholder="Type post here..." rows="12"></textarea>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="newPostImageUrl" placeholder="Paste image URL (optional)...">
            </div>
            <div class="form-group text-center">
              <button type="submit" class="btn btn-primary btn-round">Publish</button>
            </div>
          </form>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
</style>
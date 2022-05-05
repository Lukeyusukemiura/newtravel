<script setup lang="ts"></script>
<template class="">
  <div class="h-full bg-gray-700 p-3">
    <div class="flex content-box">
      <div class="left-box flex-column justify-center items-center overs">
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card overflow-hidden border rounded-lg">
              <div class="relative pb-44">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">I travel for the nature</h4>
                <p>
                  This is the photo when I went to Australia to feel the nature.
                  Location is Tasmania where my best friend lives.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card overflow-hidden border rounded-lg">
              <div class="relative pb-44">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">text</h4>
                <p>text</p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card overflow-hidden border rounded-lg">
              <div class="relative pb-44">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">text</h4>
                <p>text</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        class="right-box flex-column justify-center rounded-lg items-center overs"
      >
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card-long overflow-hidden border rounded-lg">
              <div class="relative pb-80">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">I travel for the nature</h4>
                <p>
                  This is the photo when I went to Australia to feel the nature.
                  Location is Tasmania where my best friend lives.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card-long overflow-hidden border rounded-lg">
              <div class="relative pb-80">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">I travel for the nature</h4>
                <p>
                  This is the photo when I went to Australia to feel the nature.
                  Location is Tasmania where my best friend lives.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href="#" class="m-1">
            <div class="bg-white card-long overflow-hidden border rounded-lg">
              <div class="relative pb-80">
                <img
                  class="absolute h-full w-full object-cover"
                  src="../image/photo.png"
                />
              </div>
              <div class="p-5 text-center overflow-hidden">
                <h4 class="text-2xl font-bold mb-2">I travel for the nature</h4>
                <p>
                  This is the photo when I went to Australia to feel the nature.
                  Location is Tasmania where my best friend lives.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.content-box {
  width: 100%;
  height: 100%;
}
.left-box {
  width: 30%;
  height: 100%;
}
.right-box {
  width: 70%;
  height: 100%;
}
.overs {
  overflow: scroll;
}
.card {
  height: 300px;
  width: 400px;
}
.card-long {
  height: 500px;
  width: 100%;
}
</style>

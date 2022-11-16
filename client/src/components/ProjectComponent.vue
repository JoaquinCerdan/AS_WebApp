<template>
    <div>
        <div class="d-flex justify-content-center">
            <b-card-group style="display: list-item; list-style-type: none;">
                <b-card class="m-5 b-card" align="center">
                    <b-card-title class="font-weight-bold justify-content-right">The important thing that anyone knows </b-card-title>
                    <b-card-subtitle class="font-weight">12-12-2012 </b-card-subtitle>
                    <b-card-text class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod finibus. Mauris ullamcorper nulla sit amet est pretium, sit amet imperdiet odio efficitur. Aliquam et hendrerit nunc. Mauris dapibus venenatis urna, quis tristique turpis venenatis id. Duis odio justo, ornare sed lectus eget, imperdiet tempus nibh. Praesent id ligula eget sem euismod luctus. Aliquam lectus magna, porta vel ex a, interdum feugiat purus. Donec fermentum diam ut est vestibulum, volutpat facilisis risus interdum. Mauris laoreet tempor fringilla. Suspendisse potenti. Donec ultrices venenatis arcu id posuere. Sed a ante id turpis ornare consequat. Nam consectetur interdum convallis. Vivamus pharetra, enim eu sodales interdum, nisl risus auctor turpis, nec tempus arcu nunc eu ipsum. </b-card-text>

                    <b-card-footer footer-bg-variant="transparent" footer-border-variant="light" style=" position: absolute;width: 92%;">
                        <b-button v-b-modal.modal-center variant="success">
                            See more
                        </b-button>
                    </b-card-footer>
                </b-card>
                
                <b-card class="m-5 b-card" align="center">
                    <b-card-title class="font-weight-bold justify-content-right">The important thing that anyone knows </b-card-title>
                    <b-card-subtitle class="font-weight">12-12-2012 </b-card-subtitle>
                    <b-card-text class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus euismod finibus. Mauris ullamcorper nulla sit amet est pretium, sit amet imperdiet odio efficitur. Aliquam et hendrerit nunc. Mauris dapibus venenatis urna, quis tristique turpis venenatis id. Duis odio justo, ornare sed lectus eget, imperdiet tempus nibh. Praesent id ligula eget sem euismod luctus. Aliquam lectus magna, porta vel ex a, interdum feugiat purus. Donec fermentum diam ut est vestibulum, volutpat facilisis risus interdum. Mauris laoreet tempor fringilla. Suspendisse potenti. Donec ultrices venenatis arcu id posuere. Sed a ante id turpis ornare consequat. Nam consectetur interdum convallis. Vivamus pharetra, enim eu sodales interdum, nisl risus auctor turpis, nec tempus arcu nunc eu ipsum. </b-card-text>

                    <b-card-footer footer-bg-variant="transparent" footer-border-variant="light" style=" position: absolute;width: 92%;">
                        <b-button v-b-modal.modal-center variant="success">
                            See more
                        </b-button>
                    </b-card-footer>
                </b-card>

            </b-card-group>
        </div>
    </div> 
    
</template>

<script>
export default {
    name: 'PostComponent',
}
</script>

<style>
li {
  list-style-type: none;
}
.b-card {
    max-width: 800px;
    max-height:500px;
    background-color: aliceblue;
}
.busqueda {
    max-width:200px;
}
.espaciado {
    margin-left: 6em;
}
.text {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
<template>
	<v-app>
		<v-container fluid>
			<v-row justify="center" dense>

				<v-col md="4"> 			
					<!-- 头像卡 -->
					<v-card
						:color="color"
						dark
						align="center" justify="center"
					>
						<!-- 头像 -->
            <v-avatar
              class="ma-3"
              size="85%"
              tile
            >
              <v-img :src="imgSrc"></v-img>
            </v-avatar>

					</v-card>
				</v-col>

				<!-- 资料栏 -->
				<v-col
					md=4
					offset-md="1"
				>
					<MyInfo></MyInfo>
				</v-col>


				<v-col md="2">
						
					<v-btn 
						text color="grey"
						@click="follow=(!follow)"
					>
						<template v-if="follow==true">
							<v-icon color="pink">mdi-account-heart-outline</v-icon>
							<span> Followed </span>
						</template>

						<template v-else>
							<v-icon>mdi-account-heart-outline</v-icon>
							<span> Follow </span>
						</template>

					</v-btn>
				
				</v-col> 
					
			</v-row>

			<v-divider color="grey"></v-divider>
				<br>

			<!-- 历史Shared -->
			<div>
					<h2 class="white grey--text">History</h2>
			</div>

			<v-row>
					<Shared></Shared>
			</v-row>

		</v-container>
	</v-app>
</template>

<script>
import Shared from "@/components/my/Shared";
import MyInfo from "@/components/my/MyInfo";

export default {
    name: "OthersMy",
		components: {Shared, MyInfo},
		
		data:()=>({
			color: "#1F7087",
			imgSrc: "https://frozenwhale.oss-cn-beijing.aliyuncs.com/img/man.png",
			follow: false,
		}),		
    methods: {
        
    }
    
}
</script>
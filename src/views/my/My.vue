<template>
	<v-app>
		<v-container
				fluid
		>
			<v-row justify="center" dense>
					<v-col md="8">
							<BasicInfo></BasicInfo>
					</v-col>

					<v-col md="2">
							
						<FanFollowCollect></FanFollowCollect>
					
					</v-col> 
					
			</v-row>

			<v-divider color="grey"></v-divider>
				<br>
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
import BasicInfo from "./BasicInfo";
import Shared from "@/components/my/Shared";
import FanFollowCollect from "@/components/my/FanFollowCollect";

export default {
    name: "My",
    components: {BasicInfo, Shared, FanFollowCollect},
    methods: {
        
    }
    
}
</script>
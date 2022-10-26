export default{
    methods:{
        messageBox(message, type){
            this.$message({
                message: message,
                type: type
            });
        },

        test(){
            this.$message.error('hhhhhhh')
        },
    }
}
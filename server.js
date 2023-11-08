async function run(){

var koa=require('koa');
var cors = require('koa2-cors');
var koaRouter=require('koa-router');
var swig = require('koa-swig');
var co=require('co');
var koaStaticCache=require('koa-static-cache');
var bodyParser=require('koa-bodyparser');
var mysql=require('mysql2/promise');

var app = new koa();
var router = new koaRouter();

app.use(bodyParser());
app.use(cors());
/*app.use(koaStaticCache(__dirname+'/static',{
	prefix:'/static',
	gzip:true
}));*/


const connection=await mysql.createConnection({//连接数据库
	host:'127.0.0.1',
	user:'root',
	password:'111111',
	database:'js20080214'
});

/*const render=swig({
	root:__dirname+'/view', //模板存放目录
	autoescape:true,		//是否自动编码
	cache:false,			//是否缓存
	ext:'.html'				//模板后缀名
});
app.context.render=co.wrap(render);*/

/*router.get('/', async (ctx, next)=>{

	ctx.body=await ctx.render('index.html',{datas});
});*/
router.get('/classify',async ctx=>{
	
	ctx.body={
		
		    "code": 200,
		    "classify":
		    [
		        {
		            "classifyId": 0,
		            "classifyName": "老人",
		            "children":
		            [
		                {
		                    "cid": "0",
		                    "classify_cid": "0",
		                    "picUrl": "姓名：老人1",
		                    "text": "紧急联系人：12345678",
							"text1": "用药医嘱：心脏病"
		                },
		                {
		                    "cid": "1",
		                    "classify_cid": "0",
		                    "picUrl": "姓名：老人2",
		                    "text": "紧急联系人：12312345",
							"text1": "用药医嘱：心脑血管疾病"
		                },
		                {
		                    "cid": "2",
		                    "classify_cid": "0",
							"picUrl": "姓名：老人3",
		                    "text": "紧急联系人：88888888",
							"text1": "用药医嘱：腰间盘突出"
		                },
		            ]
		        },
		        {
		            "classifyId": 1,
		            "classifyName": "护工",
		            "children":
		            [
		                {
		                    "cid": "0",
		                    "classify_cid": "1",
		                    "picUrl": "姓名：护工1",
		                    "text": "联系电话：123123123",
							"text1": "工资要求：2000"
		                },
		                {
		                    "cid": "1",
		                    "classify_cid": "1",
		                    "picUrl": "姓名：护工2",
		                    "text": "联系电话：123789456",
							"text1": "工资要求：3000"
		                },
		                {
		                    "cid": "2",
		                    "classify_cid": "1",
		                    "picUrl": "姓名：护工1",
		                    "text": "联系电话：110110110",
							"text1": "工资要求：5000"
		                },
		            ]
		        },
		        {
		            "classifyId": 2,
		            "classifyName": "缴费情况",
		            "children":
		            [
		                {
		                    "cid": "0",
		                    "classify_cid": "2",
		                    "picUrl": "姓名：老人1",
		                    "text": "已缴费"
		                },
		                {
		                    "cid": "1",
		                    "classify_cid": "2",
		                    "picUrl": "姓名：老人2",
		                    "text": "待缴费"
		                },
		                {
		                    "cid": "2",
		                    "classify_cid": "2",
		                    "picUrl": "姓名：老人3",
		                    "text": "待缴费"
		                },
		            ]
		     },
		    {
		                "classifyId": 3,
		                "classifyName": "其他",
		                "children":
		                [
		                    {
		                        "cid": "0",
		                        "classify_cid": "3",
		                        "picUrl": "客服联系电话：1357924680",
		                        
		                    }
		                ]
		         }
		]
	};
	console.log(ctx.body);
});



router.post('/js20080214', async (ctx, next)=>{
	let sno=ctx.request.body.formdata.sno;
	let name=ctx.request.body.formdata.name;
	let favourite=ctx.request.body.formdata.favourite;
	
	//ctx.body="获取数据："+switch1+"-"+radio+"-"+checkbox;
	console.log(ctx.request.body);
	//let id=switch,src=radio,author=number,title="kankan";
	let [data]=await connection.query("INSERT INTO liuziming (sno,name,favourite) VALUES('"+sno+"','"+name+"','"+favourite+"')");
	console.log(data);
	if(data.affectedRows>0) {
		ctx.body={
			code:0,
			data:"添加成功"
		}
	}else {
		ctx.body={
			code:1,
			data:"添加失败"
		}
	}
});

router.post('/account', async (ctx, next)=>{
	let sno=ctx.request.body.formdata.sno;
	let name=ctx.request.body.formdata.name;
	let favourite=ctx.request.body.formdata.favourite;
	
	//ctx.body="获取数据："+switch1+"-"+radio+"-"+checkbox;
	console.log(ctx.request.body);
	//let id=switch,src=radio,author=number,title="kankan";
	let [data]=await connection.query("INSERT INTO user (sno,password,type) VALUES('"+sno+"','"+name+"','"+favourite+"')");
	console.log(data);
	if(data.affectedRows>0) {
		ctx.body={
			code:0,
			data:"添加成功"
		}
	}else {
		ctx.body={
			code:1,
			data:"添加失败"
		}
	}
});

router.post('/login', async (ctx, next) => {
    const connection = await pool.getConnection();
    //console.log(`SELECT * FROM userInfo WHERE loginName = '${ctx.request.body.loginName}' AND password = '${ctx.request.body.password}' AND type = '${ctx.request.body.type}'`)
    try {
        const [rows, fileds] = await connection.query(
            `SELECT * FROM user WHERE sno = '${ctx.request.body.sno}' AND password = '${ctx.request.body.password}' AND type = '${ctx.request.body.favourite}'`,
        );
        ctx.body = (rows.length === 1)
    } finally {
        connection.release();
    }
});



app.use(router.routes());
app.listen(8089);
};


run();
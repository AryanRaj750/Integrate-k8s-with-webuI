#!/usr/bin/python3

import cgi, subprocess as sp

print("content-type: text/html")
print()


clientData = cgi.FieldStorage()
cquery = clientData.getvalue("q")
data = cquery.split()
List = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10']
if data[0] in List:
		
	if data[0] == '1':
		cmd = f"kubectl create deployment {data[1]} --image={data[2]} --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '2':
		cmd = f"kubectl delete deployment {data[1]}  --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '3':
		cmd = f"kubectl run {data[1]}  --image={data[2]} --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '4':
		cmd = f"kubectl delete {data[1]}  --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '5':
		cmd = f"kubectl scale  {data[1]}  {data[2]} --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '6':
		cmd = f"kubectl expose deploy {data[1]} --port={data[2]} --type={data[3]} --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '7':
		cmd = f"kubectl get deploy --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '8':
		cmd = f"kubectl get pod --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '9':
		cmd = f"kubectl get svc --kubeconfig /aryan2.kubeconfig"
	elif data[0] == '10':
		cmd = f"kubectl delete svc {data[1]} --kubeconfig /aryan2.kubeconfig"
	print(sp.getstatusoutput(cmd)[1])
	
else:	
	print(sp.getstatusoutput(cquery)[1])
	





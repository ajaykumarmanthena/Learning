/**
* @description       : 
* @author            : ChangeMeIn@UserSettingsUnder.SFDoc
* @group             : 
* @last modified on  : 05-22-2024
* @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AtomicAndNonAtomic {
    public static void AtomicAndNonAtomicMethod(){
        Opportunity a1 = new Opportunity();
        Opportunity a2 = new Opportunity();
        list<Opportunity> inserOpp = new list<Opportunity>{a1,a2};
            list<database.saveresult> res = database.insert(inserOpp,false);
        for(database.saveresult r:res){
            if(r.isSuccess()){
                system.debug('Success '+r.getID());
            } 
            else{
                list<database.error> errlist=r.getErrors();
                for(database.error err:errlist){
                    system.debug('Error '+err.getMessage());
                    system.debug('ErrorFields: '+err.getFields());
                }
            }
        }
        // system.debug('DatabasegetErrors: '+res.getErrors());
        // list<database.error> errlist=res.getErrors();
        // for(database.error d:errlist){
        //     system.debug('ErrorFields: '+d.getFields());
        //     system.debug('getMessage: '+d.getMessage());
        // }
    }
}
//AtomicAndNonAtomic.AtomicAndNonAtomicMethod();
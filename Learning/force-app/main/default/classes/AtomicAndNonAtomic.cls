/**
* @description       : 
* @author            : ChangeMeIn@UserSettingsUnder.SFDoc
* @group             : 
* @last modified on  : 05-22-2024
* @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class AtomicAndNonAtomic {
    public static void AtomicAndNonAtomicMethod(){
        Opportunity a = new Opportunity();
        database.saveresult res = database.insert(a,false);
        if(res.isSuccess()){
            system.debug('Success');
        }
        system.debug('DatabasegetErrors: '+res.getErrors());
        list<database.error> errlist=res.getErrors();
        for(database.error d:errlist){
            system.debug('ErrorFields: '+d.getFields());
            system.debug('getMessage: '+d.getMessage());
        }
    }
}
//AtomicAndNonAtomic.AtomicAndNonAtomicMethod();
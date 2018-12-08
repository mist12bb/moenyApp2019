import React from "react";

const actionFedd = (<Feed.Event key={i} >
             <Feed.Label 
              className={"amount-lable"}
              >
              <p
             className={"amount-lable__text"}
              children={action? action.amount:33}
             />
             </Feed.Label>
             <Feed.Content>
                <Feed.Date content={new Date (action.date).toLocaleDateString()}/>
                <Feed.Summary>
                <p>{action ? action.info:'descripton gose here...'}</p>
                </Feed.Summary>
                <Feed.Event >
                < Radio label="add to initlze"   checked={action.init}  onChange={(e)=>{
                  this.onMetaOpt().onAddToInit();
                  this.onInilze(action.id, !action.init, action);
                  
                }}></ Radio>
                </Feed.Event>
             </Feed.Content>
             <Feed.Meta>

             <RemoveModal className={"action-box__rem-btn"} onDeleteAction={(()=>this.onMetaOpt(i).onRemove())}>
             {/* <Icon name="remove circle"/> */}
             </RemoveModal>
             <button style={{all: "unset", cursor:"pointer"}}
             onClick={(e)=>{
               this.onMetaOpt().onSave(action)
             }}
             >
             <Icon name="save" />
             </button>
             </Feed.Meta>
            </Feed.Event>)


  
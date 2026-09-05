from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model


test_case_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
Act as a Senior QA Engineer, Business Analyst, and Defect Analyst.
 
Perform a complete bug analysis and provide:
 
1. Defect Summary
2. Defect ID
3. Defect Title
4. Defect Description
5. Module Affected
6. Preconditions
7. Steps to Reproduce
8. Test Data Used
9. Expected Result
10. Actual Result
17. Recommended Fix
 
Provide results in a structured defect report format suitable for Jira/Azure DevOps.
"""
    ),
    (
        "human",
        """
Requirement:

{requirements}

Test Cases:

{test_case}

Test Data:

{test_data}
"""
    )
])


# Create the LangChain runnable
bug_analysis_agent = test_case_prompt | chat_model